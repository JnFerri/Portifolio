

const Typhografy = ({variant = 'p' , children, ...props}) => {
  const Tag = variant
  return(
    <Tag {...props}>
      {children}
    </Tag>
  )
}

export default Typhografy;