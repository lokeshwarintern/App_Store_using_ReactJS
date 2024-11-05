import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {appName, imageUrl} = appItem

  return (
    <li className="list-ele">
      <img src={imageUrl} alt={appName} className="app-item-img" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
