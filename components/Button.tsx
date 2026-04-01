import { CustomButtonProps } from "@/types";

const Button = ({title, btnType, containerStyles, handleClick}:CustomButtonProps) => {
  return (
    <div>
      <button
          disabled={false}
          type={btnType||"button"}
          className={`text-white rounded-4xl p-3 shadow-[0_0_20px_rgba(46,79,33,0.35)] ${containerStyles}`}
          onClick={handleClick}
      >
          <span>
              {title}
          </span>
      </button>
     </div>
  )
}

export default Button