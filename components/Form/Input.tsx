import styles from '@/components/Form/Form.module.css'

export default function Input ({ type }: {
  type: string
}) {
  return (
    <input
    type={type}
    className={'rounded focus:outline-none text-red-300 px-2 py-1 focus:bg-orange-50 ' + styles.input}
    />
  )
}
