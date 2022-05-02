import { Dimensions, useWindowDimensions } from "react-native";

export const vw = (number: number, baseWidth?: number) =>
  (baseWidth || Dimensions.get("window").width) * (number / 100);

export const vh = (number: number, baseHeight?: number) =>
  (baseHeight || Dimensions.get("window").height) * (number / 100);

export const vmin = (
  number?: number,
  baseWidth?: number,
  baseHeight?: number
) =>
  Math.min(
    (baseWidth || Dimensions.get("window").width) *
      (number != undefined ? number / 100 : 1),
    (baseHeight || Dimensions.get("window").height) *
      (number != undefined ? number / 100 : 1)
  );

export const vmax = (
  number?: number,
  baseWidth?: number,
  baseHeight?: number
) => {
  return Math.max(
    (baseWidth || Dimensions.get("window").width) *
      (number != undefined ? number / 100 : 1),
    (baseHeight || Dimensions.get("window").height) *
      (number != undefined ? number / 100 : 1)
  );
};

export const percentage = (partial: number, total: number) =>
  (total * partial) / 100;

const useUnits = () => {
  const { width, height } = useWindowDimensions();

  return {
    vw: (number: number) => vw(number, width),
    vh: (number: number) => vh(number, height),
    vmin: (number?: number) => vmin(number, width, height),
    vmax: (number?: number) => vmax(number, width, height),
    percentage: (partial: number, total: number) => percentage(partial, total),
  };
};

export default useUnits;
