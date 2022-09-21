import { Box } from '@chakra-ui/react'
import React from 'react'
import {ConnectButton} from 'web3uikit'
const Connect = () => {
  return (
    <>
      <Box ml="auto">
        
          <ConnectButton moralisAuth={false}  />
        
      </Box>
    </>
  )
}

export default Connect