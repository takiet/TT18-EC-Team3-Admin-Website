interface ISvg extends IStyle {
  color?: string;
  width?: string | number;
  height?: string | number;
  className?: string | undefined;
  style?: React.CSSProperties | undefined;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  fillOpacity?: number;
  isChecked?: boolean;
}
