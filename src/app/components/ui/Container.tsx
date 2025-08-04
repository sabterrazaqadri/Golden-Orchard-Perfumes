import { twMerge } from 'tailwind-merge'

interface ContainerProps {
  className?: string
  children: React.ReactNode
}

const Container = ({ className, children }: ContainerProps) => {
  return (
    <div className={twMerge('container-custom', className)}>
      {children}
    </div>
  )
}

export default Container 