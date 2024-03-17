import styles from '@/components/Form/Form.module.css'

export default function SendData ({ label }: { label: string }) {
  return (
    <input
    type="submit"
    className={'cursor-pointer bg-slate-600 py-2 px-4 rounded hover:bg-slate-400 transition-all ' + styles.sendButton}
    value={label}
    />
  )
}