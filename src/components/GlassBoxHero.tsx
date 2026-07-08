
type texts={
    t1: string,
    t2: string,
    t3: string
}

const GlassBoxHero = ({t1,t2,t3}:texts) => {
  return (
    <div className="glasseffect">
        <p>{t1}</p>
        <p>{t2}</p>
        <p>{t3}</p>
    </div>
  )
}

export default GlassBoxHero
