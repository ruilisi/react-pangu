QiniuAntd examples:

###### QiniuAntd
```js
import { QiniuAntd } from 'react-pangu';
import { Spin } from 'antd';
import 'antd/dist/antd.css';
const qiniuHost = 'https://res.paiyou.co/'

initialState = { url: null, token: null };

if (!state.token && setState) {
  fetch('https://pangu.lingti.io/qiniu_token').then(resp => resp.json()).then(data => setState({ token: data.qiniuToken }))
}

<div>
   {state.url ? <img src={state.url} style={{ width: 256 }} /> : null}
   <div>
     {state.token ? <QiniuAntd token={state.token} onSuccess={key => setState({url: qiniuHost + key})} /> : <Spin /> }
   </div>
</div>
```
