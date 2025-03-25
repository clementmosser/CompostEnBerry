'use client'


export default function Strip(
  text: {
    normal: string | null,
    wrap: string | null, 
    bgColor: string, 
    txtColor: string, 
    bgWrap: string, 
    bgTxtWrap: string 
  }) {

    return (
      <div 
        className={`flex justify-center py-6 text-xl ${text.bgColor}`}
      >
        <blockquote className={`text-2xl uppercase font-semibold italic text-center ${text.txtColor}`}>
        {text.normal}
          <span className={`${text.bgWrap} inline-block mx-2 px-1`}>
            <span className={`relative ${text.bgTxtWrap}`}>
            {text.wrap}
            </span>
          </span>
        </blockquote>
      </div>
    )  
  
}