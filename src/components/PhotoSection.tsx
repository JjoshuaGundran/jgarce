interface Props {
  isVisible: boolean,
}

export function PhotoSection({ isVisible }: Props) {
  return (isVisible &&
    <div className="bg-gray-100 p-2 h-full grow hidden flex-col gap-1 rounded-3xl lg:flex *:bg-white *:rounded-3xl *:p-2 *:shadow-md">
      <div className="w-fit">One</div>
      <div className="flex-1">
        <div className="bg-gray-100 rounded-3xl p-2">Two</div>
      </div>
    </div>
  )
}