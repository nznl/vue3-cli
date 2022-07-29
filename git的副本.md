<!--
 * @Author: WuGuang
 * @Date: 2022-07-05 10:18:50
 * @Description: git 常见操作
 * 
 * Copyright (c) 2022 by KYNY, All Rights Reserved. 
-->


###  git 操作

1.合并整个分支
  git merge targetBranch (把targetBranch代码合并到当前所在分支)

2.创建远程分支
   git push origin newbranch:newbranch 

3.删除本地分支
  git branch - d branchName

4.删除远程分支
  git push origin --delete branchName

5.合并分支某一次提交
  git cherry-pick 6b4182a807ef4e30b7da3ea9bf7211b4de9a7b6f

6.本地关联远程分支代码
  git chekcout -b dev origin/dev

7. 修改错误commit
  git commit --amend --message='xxx'