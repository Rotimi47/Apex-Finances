

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    textStyles?: string;
    rightIcon?:string ;
    btnType?: "button" | "submit";
    isDisabled?: boolean;
    handleClick?: () => void;
}
export interface Testimonial  {
  name: string;
  oneJob: string;
  twoJob: string;
  threeJob: string;
  message: string;
  location: string;
  locationTwo: string;
 
};

export interface Props  {
  testimonials: Testimonial[];
};