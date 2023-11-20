export default function Label ({ children, htmlFor }: {
  children: React.ReactNode
  htmlFor: string
}) {
  return (
    <label htmlFor={htmlFor} className="text-lg">
      {children}
    </label>
  )
}
