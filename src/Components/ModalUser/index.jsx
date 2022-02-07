import { useState } from "react"

import { Modal, Typography, Upload, Button, Avatar } from "antd"
import { UserOutlined } from '@ant-design/icons';
 
const propsUpload = {
    action: '',
    onChange({file}){
        console.log(file);
    }
}

const ModalUser = ({visible, handleOk, handleCancel}) => {
    const [name, setName] = useState('User')

    const onChange = (value) => {
        setName(value);
    }

    return(
        <Modal 
            title='User' 
            visible={visible} 
            onOk={handleOk} 
            onCancel={handleCancel}
        >
            <Avatar icon={<UserOutlined/>}/>
            <Typography.Title level={3}>
                Name:
            </Typography.Title>
            <Typography.Text editable = {{onChange}}>
                {name}
            </Typography.Text>
            <Typography.Title level={3}>
                Email:
            </Typography.Title>
            <Typography.Text>
                12345@mail.test
            </Typography.Text>
            <Typography.Title level={3}>
                Upload avatar:
            </Typography.Title>
            <Upload {...propsUpload}>
                <Button>Upload</Button>
            </Upload>
        </Modal>
    )
}
export default ModalUser