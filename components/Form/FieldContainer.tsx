export default function FieldContainer ({ children, className }: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={'flex flex-col justify-center gap-2 ' + className}>
        {children}
    </div>
  )
}
