import { Item } from "./Item"
function List(props) {

    const { text=[], removeItem } = props

    return <ul>
       {/*  {

            text.map((item) => {

                return <Item removeItem={removeItem} key={item.id} {...item}  />
            })
        } */}
    </ul>
}

export { List }

