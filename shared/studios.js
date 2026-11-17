// Test studios (negative ids, prod Healcode widgets). View only: never book or buy on these.
window.STUDIOS = [
  { key: '532127', name: 'Luke Bowden Training Demo', site: -532127, widget: 'a3623810750', preview: true, level: 'No classes',
    blurb: 'No classes at all in the next 90 days: the empty state.' },
  { key: '53022', name: 'HW AutomationV2', site: -53022, widget: 'd8370323ffa', preview: true, level: 'One a week',
    blurb: 'One class a week, on Fridays. Show more has to reach weeks ahead.' },
  { key: '251094', name: 'Aqua Vida', site: -251094, widget: '4c73436e696', preview: false, level: 'Runs out',
    blurb: 'A handful of Monday classes, then nothing. Show more runs out of classes.' },
  { key: '5302', name: 'Balanced Body Collective', site: -5302, widget: '2954813a37c', preview: false, level: 'Normal',
    blurb: 'About 35 classes a week, up to 9 a day.' },
  { key: '308', name: 'Steps on Broadway', site: -308, widget: '00705830e76', preview: false, level: 'Very busy',
    blurb: 'Up to 120 classes a day, far more than a page of 10. Slow to load.' },
]
window.DEFAULT_STUDIO = '5302'

window.currentStudio = () => {
  const key = new URLSearchParams(location.search).get('studio')
  return window.STUDIOS.find((s) => s.key === key) ?? window.STUDIOS.find((s) => s.key === window.DEFAULT_STUDIO)
}

window.applyStudio = (el) => {
  const studio = window.currentStudio()
  el.setAttribute('data-widget-id', studio.widget)
  if (studio.preview) el.setAttribute('data-preview', 'true')
}

document.addEventListener('DOMContentLoaded', () => {
  const studio = window.currentStudio()
  document.title = `${document.title} · ${studio.name}`
  document.querySelectorAll('.site-header b').forEach((b) => (b.textContent = studio.name))
})
