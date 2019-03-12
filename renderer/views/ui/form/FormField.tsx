import * as React from 'react'

type SelectOptionObject = {
  [key: string]: {
    label: string
    name?: string
    value?: string | number
  }
}

interface Props {
  name: string
  type: 'text' | 'select' | 'textarea' | 'toggle'
  label: string
  options?: SelectOptionObject
  required?: boolean
  checked?: boolean
  value?: any
  onChange?: (e: any) => void
}

const _renderOptions = (options?: SelectOptionObject) => {
  let items = [<option />]

  if (!options)
    return items

  Object.keys(options).forEach(k =>
    items.push(<option value={k}>{options[k].label}</option>)
  )

  return items
}

const FormField: React.SFC<Props> = (props) => {
  const { name, type, label, options, ...rest } = props
  let field = null

  switch (type) {
    case 'select' :
      field = <select name={name} {...rest}>{_renderOptions(options)}</select>
      break
    case 'text' :
      field = <input name={name} type={type} {...rest} />
      break
    case 'toggle' :
      field = <input name={name} type="checkbox" {...rest} />
      break
    case 'textarea' :
      field = <textarea name={name} {...rest}></textarea>
      break
  }

  switch (type) {
    case 'toggle' :
      return (
        <label className={`field ${type}`}>
          {field}
          <span className="slider"></span>
          <strong>{label}</strong>
        </label>
      )
    default :
      return (
        <div className={`field ${type}`}>
          {field}
          <label htmlFor={name}>{label}</label>
          <span />
        </div>
      )
  }
}

export default FormField