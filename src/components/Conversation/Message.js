import { Box,Stack } from '@mui/material'
import React from 'react'
import { Chat_History } from '../../data'
import { MediaMsg, MsgText, Timeline } from './MsgTypes'

const Message = () => {
  return (
    <Box p={3} >
        <Stack spacing={3}>
            {Chat_History.map((el) =>{
                switch (el.type) {
                    case "divider":
                        return <Timeline el={el}/>
                        
                        case "msg":
                        switch (el.subtype) {
                            case "img":
                                return <MediaMsg el={el}/>
                                
                                case "doc":
                                
                                break;
                                case "link":
                                
                                break;
                                case "reply":
                                
                                break;
                        
                            default:
                               return <MsgText el={el}/>
                        }
                        break;
                
                    default:
                        return <></>
                        break;
                }
            })}
        </Stack>
    </Box>
  )
}

export default Message
