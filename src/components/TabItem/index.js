import './index.css'

const TabItem = props => {
  const {tabBtnEle, btnClick, isActive} = props
  const {tabId, displayText} = tabBtnEle

  const onChangeBtn = () => {
    btnClick(tabId)
  }

  const activeClassName = isActive ? 'btn-active-class-name' : null

  return (
    <li>
      <button
        type="button"
        className={`btn-ele ${activeClassName}`}
        onClick={onChangeBtn}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
