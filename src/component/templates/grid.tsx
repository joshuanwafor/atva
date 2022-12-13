import React, {forwardRef, useState, useCallback, useMemo, Ref} from 'react';
import {
  View,
  Dimensions,
  FlatListProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {chunkArray, calculateDimensions, generateStyles} from '../../utils';

interface TProps<T> extends FlatListProps<any> {
  itemDimension?: number;
  fixed?: boolean;
  spacing?: number;
  staticDimension?: number;
  itemContainerStyle?: StyleProp<ViewStyle>;
}

const FlatGrid = forwardRef(
  <T extends object>(props: TProps<T>, ref: Ref<FlatList<T>>) => {
    const {
      style,
      spacing,
      fixed,
      data = [],
      itemDimension,
      renderItem,
      horizontal,
      onLayout,
      staticDimension,
      itemContainerStyle,
      keyExtractor,
      ...restProps
    } = props;

    const [totalDimension, setTotalDimension] = useState(() => {
      let defaultTotalDimension = staticDimension;

      if (!staticDimension) {
        const dimension = horizontal ? 'height' : 'width';
        defaultTotalDimension = Dimensions.get('window')[dimension];
      }

      return defaultTotalDimension;
    });

    const onLayoutLocal = useCallback(
      (e) => {
        if (!staticDimension) {
          const {width, height} = e.nativeEvent.layout || {};
          let newTotalDimension = horizontal ? height : width;

          if (totalDimension !== newTotalDimension) {
            setTotalDimension(newTotalDimension);
          }
        }

        // call onLayout prop if passed
        if (onLayout) {
          onLayout(e);
        }
      },
      [staticDimension, totalDimension, horizontal, onLayout],
    );

    const renderRow = useCallback(
      ({
        rowItems,
        rowIndex,
        separators,
        isLastRow,
        itemsPerRow,
        rowStyle,
        containerStyle,
        ...rest
      }) => {
        // To make up for the top padding
        let additionalRowStyle: StyleProp<ViewStyle> = {
          alignItems: 'flex-start',
        };
        if (isLastRow) {
          additionalRowStyle = {
            ...(!horizontal ? {marginBottom: spacing} : {}),
            ...(horizontal ? {marginRight: spacing} : {}),
          };
        }

        return (
          <View style={[rowStyle, additionalRowStyle]}>
            {rowItems.map((item: any, i: number) => (
              <View
                key={
                  keyExtractor
                    ? keyExtractor(item, i)
                    : `item_${rowIndex * itemsPerRow + i}`
                }
                style={[containerStyle, itemContainerStyle]}>
                {renderItem &&
                  renderItem({
                    item,
                    index: rowIndex * itemsPerRow + i,
                    separators,
                    rowIndex,
                    ...rest,
                  })}
              </View>
            ))}
          </View>
        );
      },
      [renderItem, spacing, keyExtractor, itemContainerStyle, horizontal],
    );

    const {containerDimension, itemsPerRow, fixedSpacing} = useMemo(
      () =>
        calculateDimensions({
          itemDimension,
          staticDimension,
          totalDimension,
          spacing,
          fixed,
        }),
      [itemDimension, staticDimension, totalDimension, spacing, fixed],
    );

    const {containerStyle, rowStyle} = useMemo(
      () =>
        generateStyles({
          horizontal,
          itemDimension,
          containerDimension,
          spacing,
          fixedSpacing,
          fixed,
        }),
      [
        horizontal,
        itemDimension,
        containerDimension,
        spacing,
        fixedSpacing,
        fixed,
      ],
    );

    const rows = chunkArray(data, itemsPerRow);

    const localKeyExtractor = useCallback(
      (rowItems: any, index) => {
        if (keyExtractor) {
          return rowItems
            .map((rowItem: any, rowItemIndex: number) =>
              keyExtractor(rowItem, rowItemIndex),
            )
            .join('_');
        }
        return `row_${index}`;
      },
      [keyExtractor],
    );

    return (
      <FlatList
        data={rows}
        ref={ref}
        extraData={totalDimension}
        renderItem={({item, index, separators, ...rest}) =>
          renderRow({
            rowItems: item,
            rowIndex: index,
            isLastRow: index === rows.length - 1,
            itemsPerRow,
            rowStyle,
            separators,
            containerStyle,
            ...rest,
          })
        }
        style={[
          {
            ...(horizontal ? {paddingLeft: spacing} : {paddingTop: spacing}),
          },
          style,
        ]}
        onLayout={onLayoutLocal}
        keyExtractor={localKeyExtractor}
        {...restProps}
        horizontal={horizontal}
      />
    );
  },
);

FlatGrid.defaultProps = {
  fixed: false,
  itemDimension: 120,
  spacing: 10,
};

export default FlatGrid;
