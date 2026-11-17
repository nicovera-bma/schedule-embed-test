document.documentElement.classList.add('js')
document.querySelectorAll('.row').forEach((row) => {
  const slider = row.querySelector('[data-busy] input')
  const output = row.querySelector('[data-busy] output')
  const set = () => {
    const s = STUDIOS[slider.value]
    output.innerHTML = `<b>${s.level}: ${s.name}</b>${s.blurb}`
    slider.setAttribute('aria-valuetext', `${s.level}, ${s.name}`)
    row.querySelectorAll('a[data-scenario]').forEach((a) => { const u = new URL(a.href); u.searchParams.set('studio', s.key); a.href = u.pathname + u.search })
    localStorage.setItem(slider.id, slider.value)
  }
  slider.value = localStorage.getItem(slider.id) ?? STUDIOS.findIndex((s) => s.key === DEFAULT_STUDIO)
  slider.addEventListener('input', set)
  set()
})
const io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { rootMargin: '0px 0px -10% 0px' })
document.querySelectorAll('.reveal').forEach((el, i) => { el.style.transitionDelay = (i % 2) * 80 + 'ms'; io.observe(el) })
