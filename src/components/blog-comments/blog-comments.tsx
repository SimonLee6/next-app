import style from "./blog-comments.module.scss";
import { Props } from "@interface/interfaces";
import {
  MessageOutlined,
  ChromeFilled,
  WindowsFilled,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { Row, Col, Input, Button, message } from "antd";
import { useState } from "react";
import { getBrowser, getSystem } from "@util/util";

type CommentsProps = {
  addCommentsMethod: Function
} & Props;




const CommentItem = ({comments, type = "main"}) => {
  const IconStyle = {
    color: "#b3b3b3",
    fontSize: "15px"
  }

  return(
    <div className={style.commentItemWrap}>
      <div className={[style.commentInfo, style[type]].join(" ")}>
        <div className={[style.avatar, style[type + "Avatar"]].join(" ")}></div>
        <div className={style.topInfo}>
          <div className={[style.top, style.topItem].join(" ")}>
            <div className={style.nickName}>{comments.nick_name}</div>
            <div className={[style.commentType, style.topItemCell].join(" ")}>访客</div>
            <div className={[style.browser, style.topItemCell].join(" ")}>
              <ChromeFilled style={IconStyle}/>
              <span>{comments.browser}</span>
            </div>
            <div className={[style.system, style.topItemCell].join(" ")}>
              <WindowsFilled style={IconStyle}/>
              <span>{comments.system}</span>
            </div>
            <div className={[style.location, style.topItemCell].join(" ")}>
              <EnvironmentOutlined style={IconStyle}/>
              <span>{comments.location}</span>
            </div>
          </div>
          <div className={[style.bottom, style.topItem].join(" ")}>2020-12-12 23:23:23</div>
        </div>
        {/* {
          type === "main" ? <div className={style.replyBtn}>回复</div> : ""
        } */}
      </div>
      <div className={style.commentText}>{comments.content}</div>
    </div>
  )
}
const ReplayForm = (props: any) => {
  const addCommentsMethod = props.addCommentsMethod

  const [nickName, setNickName] = useState("")
  const [email, setEmail] = useState("")
  const [net, setNet] = useState("")
  const [content, setContent] = useState("")

  
  
  const submitComments = () => {
    // type: comments(留言), replyComments(回复留言)
    const params = {
      type: "comments",
      nick_name: nickName,
      email,
      net,
      content,
      system: getSystem(),
      browser: getBrowser(),
      location: window.returnCitySN.cname || "未知"
    }
    if (!nickName || !content) {

      message.warning("昵称/内容不为空")
      return
    }
    addCommentsMethod(params)
  }

  return(
    <div className={style.commentsForm}>
      <Row style={{borderBottom: "1px dotted #e9ecef", padding: "5px"}}>
        <Col span={8}>
          <div className={style.formItem}>
            <Input placeholder="*昵称" type="text" onChange={e => setNickName(e.target.value)}/>
          </div>
        </Col>
        <Col span={8}>
          <div className={style.formItem}>
            <Input placeholder="邮箱" type="text" onChange={e => setEmail(e.target.value)}/>
          </div>
        </Col>
        <Col span={8}>
          <div className={style.formItem}>
            <Input placeholder="网站" type="text" onChange={e => setNet(e.target.value)}/>
          </div>
          
        </Col>
      </Row>
      <Row style={{marginBottom: "10px"}}>
        <Col span={24}>
          <div className={style.formItem}>
            <Input.TextArea placeholder="吐吐槽吧~" rows={6} onChange={e => setContent(e.target.value)}></Input.TextArea>
          </div>
        </Col>
      </Row>
      <Row style={{textAlign: "right"}}>
        <Col span={24}>
          <div className={style.formItem}>
            <Button type="primary" onClick={() => submitComments()}>提交</Button>
          </div>
        </Col>
      </Row>
    </div> 
  )
}


export default function BlogComments(props: CommentsProps) {

  const { title = "评论", comments = [] } = props
  
  return(
    <div className={style.commentsWrap}>
      <div className={style.commentsTitle}>
        <MessageOutlined style={{color: "blue", fontSize: "20px", marginRight: "5px" }}/> 
        { title }
      </div>
      <hr className="icon-hr"/>
      <div className={style.commentsFormWrap}>
        <ReplayForm addCommentsMethod={props.addCommentsMethod}></ReplayForm>
      </div>
      <div className={style.commentsList}>
        {
          comments.map((ele:any) => (
            <div className={style.commentsItem} key={ele.id}>
              <CommentItem comments={ele}></CommentItem>
              {
                ele.reply_list.map((item: any) => (
                  <div className={style.replyComments} key={item.id}>
                    <CommentItem comments={item} type="sub"></CommentItem>
                  </div>
                ))
              }
              <hr className="icon-hr"/>
            </div>
          ))
        }
        
      </div>
    </div>
  )
}