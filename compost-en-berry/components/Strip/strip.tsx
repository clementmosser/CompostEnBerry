'use client'

export default function Strip(text: {normal: string, wrap: string}) {
  return (
    <div className="flex justify-center py-6 text-xl bg-green-berry-100 ">
      <blockquote className="text-2xl uppercase font-semibold italic text-center text-colors-berry-green-l">
      {text.normal}
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-green-berry-l-100 relative inline-block mx-2 px-1">
          <span className="relative text-colors-berry-green">
          {text.wrap}
          </span>
        </span>
      </blockquote>
    </div>
  )
}