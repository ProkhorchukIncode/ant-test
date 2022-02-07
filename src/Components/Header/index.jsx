import { PageHeader, Divider, Button } from "antd"

const Header = ({onClick}) => {
    return(
        <>
            <PageHeader
                title='Ant design'
                extra={[
                    <Button key='1' onClick={onClick}>User</Button>
                ]}
            />
            <Divider/>
        </>
    )
}
export default Header