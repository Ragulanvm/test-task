1. How do you create new user with api key for AWS, Azure, GCP
#AWS Cli method
aws iam creat-user --user-name="new"

aws iam attach-user-policy --user-name new --policy-arn


2. How to resolve merge conflicts in git command
We have to pull/merge from base branch to our branch
ex: feat_120 our branch and base is dev

git checkout feat_120

git pull origin dev

Then we have to clear conflicts manually. Mostly I will apply incoming changes first then I will append my changes so that others changes won't get lost. Once conflicts resolved we have add files and commit

git add <file-name>

git commit -m "Merged with base branch"

git pushß


Best way We have rebase our branch with dev on daily basis