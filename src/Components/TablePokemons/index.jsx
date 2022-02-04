import { Table } from "antd"
import { Row } from "antd"
import { Col } from "antd"
import { Typography } from "antd"
import Text from "antd/lib/typography/Text"

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <Typography>
                <Text copyable>
                    {text}
                </Text>
            </Typography>
            ,
        sorter: (a, b) => a.name.length - b.name.length,
        filters: [
            {
                text: 'char',
                value: 'char',
            },
            {
                text: 'ra',
                value: 'ra',
            },
            {
                text: 'saur',
                value: 'saur',
            },
        ],
        onFilter: (value, item) => item.name.includes(value)
    },
    {
        title: 'Image',
        dataIndex: 'url',
        key: 'image',
    },
]

const TablePokemons = ({pokemons}) => {
    return (
        <Row>
            <Col xs={24} md={{span:12, offset:6}}>
                <Table
                    dataSource={pokemons} columns={columns}
                />
            </Col>
        </Row>
    )
}
export default TablePokemons