import React, { Component } from "react";
import {Card, Input, Select, Collapse, Tabs} from "antd";
import WorkflowCustomFieldList from "@/pages/Workflow/WorkflowCustomFieldList";
import WorkflowState from "@/pages/Workflow/WorkflowState";
import WorkflowTransiton from "@/pages/Workflow/WorkflowTransition";
import WorkflowGraph from "@/pages/Workflow/WorkflowGraph";
import WorkflowBasicInfo from "@/pages/Workflow/WorkflowBasicInfo";
import WorkflowStatistic from "@/pages/Workflow/WorkflowStatistic";

const { Option } = Select;
const { TextArea } = Input;
const { Panel } = Collapse;
const { TabPane } = Tabs;


class WorkflowDetail extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      workflowDetailResult: {},
      noticeList: [],
      workflowId: 0,
      appTokenList: [],
      deptList: [],
      optionalFieldList: [],
      searchAdminerResult: [],
      searchIntervenerResult: [],
      searchViewerResult: [],
      panelActiveKey: '-1',
    }
  }

  componentDidMount() {
    let workflowId = new URLSearchParams(this.props.location.search).get('workflow_id');
    this.setState({workflowId});
  }


  tabChange = (key: string)=> {
    console.log(key);
  }

  render() {
    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };

    return (
      <Card>
        <Tabs defaultActiveKey="1" onChange={this.tabChange}>
          <TabPane tab="basic information" key="basicInfoTab">
            <WorkflowBasicInfo workflowId={this.state.workflowId}/>
          </TabPane>
          {this.state.workflowId?
            <TabPane tab="custom field" key="customFieldTab">
              <WorkflowCustomFieldList workflowId={this.state.workflowId}/>
            </TabPane>
            :null}
          {this.state.workflowId?
          <TabPane tab="state" key="stateTab">
            <WorkflowState workflowId={this.state.workflowId}/>
          </TabPane> :null}
          {this.state.workflowId?
          <TabPane tab="transitionTab" key="transitionTab">
            <WorkflowTransiton workflowId={this.state.workflowId}/>
          </TabPane>: null}
          {this.state.workflowId?
          <TabPane tab="flow chart" key="flowChatTab">
            <WorkflowGraph workflowId={this.state.workflowId}/>
          </TabPane>:null}
          {this.state.workflowId?
          <TabPane tab="statistics" key="statisticsTab">
            <WorkflowStatistic workflowId={this.state.workflowId}/>
          </TabPane>: null}
        </Tabs>
      </Card>
    )

  }

}

export default WorkflowDetail;
