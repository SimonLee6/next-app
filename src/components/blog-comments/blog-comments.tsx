import style from "./blog-comments.module.scss";
import { Props } from "@interface/interfaces";
import {
  MessageOutlined,
  ChromeFilled,
  WindowsFilled,
  EnvironmentOutlined,
} from "@ant-design/icons"
import { Row, Col, Input, Button } from "antd";

const submitComments = () => {
  console.log("submit")
}

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
const ReplayForm = () => {
  return(
    <div className={style.commentsForm}>
      <Row style={{borderBottom: "1px dotted #e9ecef", padding: "5px"}}>
        <Col span={8}>
          <div className={style.formItem}>
            <Input placeholder="*昵称" type="text" />
          </div>
        </Col>
        <Col span={8}>
          <div className={style.formItem}>
            <Input placeholder="邮箱" type="text" />
          </div>
        </Col>
        <Col span={8}>
          <div className={style.formItem}>
            <Input placeholder="网站" type="text" />
          </div>
          
        </Col>
      </Row>
      <Row style={{marginBottom: "10px"}}>
        <Col span={24}>
          <div className={style.formItem}>
            <Input.TextArea placeholder="吐吐槽吧~" rows={6}></Input.TextArea>
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


export default function BlogComments(props: Props) {

  const { title = "评论", comments = [] } = props
  return(
    <div className={style.commentsWrap}>
      <div className={style.commentsTitle}>
        <MessageOutlined style={{color: "blue", fontSize: "20px", marginRight: "5px" }}/> 
        { title }
      </div>
      <hr className="icon-hr"/>
      <div className={style.commentsFormWrap}>
        <ReplayForm></ReplayForm>
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