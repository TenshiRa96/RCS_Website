type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  center?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading${center ? ' section-heading--center' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-copy">{description}</p>
    </div>
  )
}
