import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Upload, Button, Icon, Spin, message,
} from 'antd'

const uploadProps = {
  action: 'https://upload.qiniup.com/',
  name: 'file',
}

const QiniuAntd = ({
  token, onSuccess, keyPrefix, keyFunc, limitedSize,
}) => {
  const [uploading, setUploading] = useState(false)
  const [filename, setFilename] = useState('')

  const handleAvatarChange = ({ file }) => {
    if (file.status === 'uploading') {
      setUploading(true)

      return
    }
    if (file.status === 'done') {
      setUploading(false)
      const {
        response: { key },
      } = file
      onSuccess(key)
    }
  }

  return (
    <Upload
      {...uploadProps}
      accept="image/*"
      showUploadList={false}
      beforeUpload={file => {
        setFilename(file.name)
        const isLt2M = file.size / 1024 / 1024 < limitedSize
        if (!isLt2M) {
          message.error(`Image must smaller than ${limitedSize}MB!`)
        }

        return isLt2M
      }}
      data={{ token, key: keyFunc(keyPrefix, filename) }}
      onChange={handleAvatarChange}
    >
      <Button>
        {uploading ? <Spin indicator={<Icon type="loading" style={{ fontSize: 18 }} spin />} /> : <Icon type="upload" />}
        <span style={{ marginLeft: 4 }}>Upload</span>
      </Button>
    </Upload>
  )
}

QiniuAntd.propTypes = {
  token: PropTypes.string.isRequired,
  /** Image default limit size 2MB */
  limitedSize: PropTypes.number,
  /** Function called when uploading is dong */
  onSuccess: PropTypes.func.isRequired,
  /** Prefix for key of uploaded file */
  keyPrefix: PropTypes.isRequired,
  /** Function called for generating key */
  keyFunc: PropTypes.func,
}

QiniuAntd.defaultProps = {
  keyFunc: (keyPrefix, filename) => (keyPrefix ? `${keyPrefix}-${new Date().getTime()}-${filename}` : `${new Date().getTime()}-${filename}`),
  limitedSize: 2,
}

export default QiniuAntd
