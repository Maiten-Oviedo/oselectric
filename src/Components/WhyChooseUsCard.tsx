interface Props {
  reason: { title: string; description: string }
}

const WhyChooseUsCard = ({ reason }: Props) => {
  return (
    <li className="mt-10 md:mt-0 max-w-[400px] md:max-w-[280px]">
      <p className="text-3xl text-secundary text-center font-semibold mb-10">
        {reason.title}
      </p>
      <p className="text-center">{reason.description}</p>
    </li>
  )
}

export default WhyChooseUsCard
