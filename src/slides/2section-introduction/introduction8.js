import React from 'react'

import {
  Slide,
  Text,
  Layout,
  Fill,
  Appear
} from 'spectacle';

export default (
  <Slide transition={['fade']} bgColor="purple">
    <Appear order="1">  
      <Text margin="0 0 50px 0" textColor="primary" size={3} caps fit bold>
        Beberapa fitur yang ada
      </Text>
    </Appear>

      <Layout>
        <Appear order="2">
          <Fill>
            <Text margin="0 0 30px 0" textSize="3rem" textColor="primary" bold>
              Camera Access                  
            </Text>
          </Fill>
        </Appear>
        <Appear order="3">        
          <Fill>
            <Text margin="0 0 30px 0" textSize="3rem" textColor="primary" bold>
              Offline Access               
            </Text>
          </Fill>
        </Appear>
      </Layout>

      <Layout>      
        <Appear order="4">        
          <Fill>
            <Text margin="0 0 30px 0" textSize="3rem" textColor="primary" bold>
              One-Click Install                
            </Text>
          </Fill>
        </Appear>

        <Appear order="5">        
          <Fill>
            <Text margin="0 0 30px 0" textSize="3rem" textColor="primary" bold>
              Background Sync                
            </Text>
          </Fill>
        </Appear>
      </Layout>

      <Layout>      
        <Appear order="6">        
          <Fill>
            <Text margin="0" textSize="3rem" textColor="primary" bold>
              Push Notification     
            </Text>
          </Fill>
        </Appear>

        <Appear order="7">        
          <Fill>
            <Text margin="0" textSize="3rem" textColor="primary" bold>
              Geolocation Access              
            </Text>
          </Fill>
        </Appear>
      </Layout>

  </Slide>
)