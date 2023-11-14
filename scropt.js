document.getElementById('addIssue').addEventListener('click', function () {
    let title = document.getElementById('issueTitle').value;
    let description = document.getElementById('issueDescription').value;
    let status = document.getElementById('issueStatus').value;
   
    let newIssue = {
       id: Math.floor(Math.random() * 1000),
       title: title,
       description: description,
       status: status
    };
   
    addIssueToList(newIssue);
   });
   
   function addIssueToList(issue) {
    let issueList = document.getElementById('issueList');
   
    let listItem = document.createElement('li');
    listItem.setAttribute('id', 'issue-' + issue.id);
   
    let issueTitle = document.createElement('h2');
    issueTitle.innerText = issue.title;
   
    let issueDescription = document.createElement('p');
    issueDescription.innerText = issue.description;
   
    let issueStatus = document.createElement('p');
    issueStatus.innerText = issue.status;
   
    listItem.appendChild(issueTitle);
    listItem.appendChild(issueDescription);
    listItem.appendChild(issueStatus);
   
    issueList.appendChild(listItem);
   }