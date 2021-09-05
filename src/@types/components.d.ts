interface IStyle {
  className?: string;
  width?: number;
  marginBottom?: number;
  margin?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  padding?: number;
  paddingBottom?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingLeft?: number;
}
interface IClassName {
  className?: string;
  width?: any;
  marginBottom?: number;
  margin?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  padding?: number;
  paddingBottom?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingLeft?: number;
}

interface IHeader {}

interface ISearchBar extends IStyle {
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  type?: "text" | "password";
  error?: any;
  id?: string;
  isFocus?: boolean;
  valueOnChange?: any;
  onClick?: any;
}

interface IInput extends IStyle {
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  type?: "text" | "password" | "reset" | "date" | "datetime-local";
  error?: any;
  id?: string;
  isFocus?: boolean;
  valueOnChange?: any;
  onClick?: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
  onFocus?: any | undefined;
  autoComplete?: string | "";
  onkeypress?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
  defaultValue?: any;
}

interface IAvatar {
  image?: ?string;
  className?: string;
  height?: number | string;
  width?: number | string;
  borderRadius?: number;
  marginRight?: number;
  borderWidth?: number;
  borderColor?: BorderColor | undefined;
  marginBottom?: number;
  flex?: Property.Flex<string | number>;
}

interface IButton extends IStyle {
  className?: string;
  color?: string;
  height?: number;
  borderRadius?: number;
  width?: number | string;
  backgroundColor?: string;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  type?: "submit" | "button";
  fontSize?: number;
  fontWeight?: Property.FontWeight;
  background?: string;
  border?: Property.Border<string | number>;
  disabled?: boolean;
  isWhite?: boolean;
}

interface ICalendar extends IStyle {
  onSelect?: (time: Date) => void;
  value: Date;
  onChangePreAndNext: (month: any, year: any) => void;
  // values: Array<{ countcandidate: number; datemeeting: string }>;
}

interface ILabel extends IStyle {
  icon?: any;
  title?: any;
}
interface ICourse {
  name: string;
  durations: string;
  level: string;
  subject: string;
  rating: number;
}

interface ICourseRow {
  index?: number;
  name?: string;
  avatar?: string;
  tutor?: any;
  avatartutor?: string;
  price?: number;
  onClick?: any;
  duration?: string;
  rating?: number;
}
interface ITutorRow {
  index?: number;
  name?: string;
  phone?: number;
  email?: string;
  avatar?: string;
  onClick?: any;
  rating?: number;
  onClickDelete?: any;
}
interface IPaymentRow {
  index?: number;
  tutorname?: string;
  tutoravatar?: string;
  coursename?: string;
  courseavatar?: string;
  username?: string;
  useravatar?: string;
  amount?: number;
  onClick?: any;
}
interface IVoucherRow {
  index?: number;
  code?: string;
  from?: any;
  to?: any;
  discount?: number;
  type?: boolean;
  onClick?: any;
  onClickDelete?: any;
}

interface ITextarea extends IStyle {
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
  maxLength?: number | undefined;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement> | undefined;
  background?: Property.Background<string | number> | undefined;
  borderRadius?: string | undefined;
  width?: string | undefined;
  height?: string | undefined;
  className?: string | undefined;
  error?: string | any;
  defaultValue?: string | number;
}

interface IMultiInput extends IClassName {
  onkeypress?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
  onChange: (value: any) => void;
  label?: string;
  isOver?: boolean;
  removeItem?: any;
  values?: Array<{ item: string }>;
  onFocus?: any | undefined;
  onBlur?: any | undefined;
  register?: any;
  titleName?: any;
  handleRemoveTextHeader?: any;
  mainTitle?: any;
  errorTitle?: string;
}
