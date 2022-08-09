import "./RemoteWorkHeader.css"
function RemoteWorkHeader() {
  return (
    <div>
      <nav className="nav">
        <h2>Snap</h2>
        <ul className="nav-ul">
            <li>Features<select>
            <option value="Features">1erty</option>
            <option value="Features">2</option>
            <option value="Features">2</option>
            </select></li>
            <li>Company<select>
            <option value="Features">1erty</option>
            <option value="Features">2</option>
            <option value="Features">2</option>
            </select></li>
            <li>Careers</li>
            <li>About</li>
        </ul>
      </nav>
    </div>
  )
}

export default RemoteWorkHeader
