// @flow
// eslint-disable react/jsx-wrap-multilines

import React from 'react'

type Props = {
  message: string,
}

const Message = ({ message }: Props) =>
  <p>{message}</p>

export default Message
