#!/usr/bin/env node

/*
 * All projects:
 *   http://gitlab.zyhack.cn/api/v3/projects?private_token=WzYV7NAshHBjEtpLyvEU
 */

var request = require("request");

var options = {
  getMiletstones: {
    url: "http://gitlab.zyhack.cn/api/v3/projects/5/milestones",
    headers: {
      'private_token': 'WzYV7NAshHBjEtpLyvEU'
    }
  },
  addIssue: {
    url: "http://gitlab.zyhack.cn/api/v3/projects/6/issues",
    method: 'POST',
    headers: {
      'private_token': 'WzYV7NAshHBjEtpLyvEU'
    },
    form: {
      id: "5",
      title: "20140705",
      milestone_id: "1"
    }
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode === 200) {
    var info = JSON.parse(body);
    info.forEach(function(i,v,a){
      console.log(i.id + "\t" + i.title + "\t" + i.description + "\tDeadline:\t" + i.due_date);
    });
  }
}

function getMiletstones() {
  request(options["getMiletstones"], callback);
}

function addIssue() {
  request(options["addIssue"], callback);
}

getMiletstones();
//addIssue();
