//Commentaire = M
// git commit --amend .\test.js  => permet de modifier le nom (avec -m) ou ajouter un fichier oublié au commit, si untracked
// modifie le nom du commit

/*
pour maintenir un fichier "untracked", si on ne veut pas le commiter exemple :
git rm --cached .\test.js

quitter : ..q

Comparer 2 commits:
git diff id1^id2
************************************
Branches
git branch        => indique si on est sur la master/main ou sur une branche
exemple :
IB@DESKTOP-6IM55F2 MINGW64 ~/Documents/Formation (master)
$ git branch
* master

IB@DESKTOP-6IM55F2 MINGW64 ~/Documents/Formation (master)
$ git branch MaBranche

IB@DESKTOP-6IM55F2 MINGW64 ~/Documents/Formation (master)
$ git checkout MAbranche
Switched to branch 'MAbranche'

IB@DESKTOP-6IM55F2 MINGW64 ~/Documents/Formation (MAbranche)
$ git checkout -b MAbranche2
Switched to a new branch 'MAbranche2'
   => crée une autre branche et envoie directement dessus.

retout vers le main :IB@DESKTOP-6IM55F2 MINGW64 ~/Documents/Formation (MAbranche2)
$ git checkout master
Switched to branch 'master'

Pour supprimer une branche => en sortir
IB@DESKTOP-6IM55F2 MINGW64 ~/Documents/Formation (MAbranche2)
$ git checkout master
Switched to branch 'master'

suppression :
IB@DESKTOP-6IM55F2 MINGW64 ~/Documents/Formation (master)
$ git branch -d Mabranche2
Deleted branch Mabranche2 (was c1bde1e).

git commit -am ""    permet de tout commiter en une ligne (sans git add .)
git reset --hard "codeCommit" ATTENTION !!! permet de revenir au commit initial... il supprime tout !!! et pas réversible.
git reset "codeCommit" va conserver les autres fichiers

git add .\test.js
git commit -m "feat(test) : mise en place du test 45"

***************************************
git stash
git stash apply {index}
git stash -drop {index}      supprime le stash
************************************
Tags.
Le tag n'est pas un commit mais il est attaché à un commit.
git tag "je choisis le tag, ici, par exemple 0.5.0" => si pas de params de commit, va se rattacher au dernier commit effectué


supprimer tag :
git tag -d 0.5.0

pour aller le chercher
git checkout tags/0.5.0 -b hotfix/0.5.1 
git branch => va  recréer une nouvelle branche
git checkout master
git branch

TDD Test Driven Development

Cf GitFlow

Rebase : déplacer le head pour transformer le dernier commit en master.

Renommer une branche : (revenir sur la branche  avant)
git branch -M newBranchName

****************************************
à chaque création d'un dépôt local :
git push --set-upstream origin dev
git push -u origin dev   =====> ici, dev est le nom de la nouvelle branche

En local voir toutes les branches :
(après le git pull, pour mise à jour)
git branch -a

pour basculer sur autre branche : 
git branch nomDeAutreBranche

Dans Git : ajouter des collaborateurs
Dans repository du GitHub, dans le "setting" du repository : collaborator


utilisation des pull requests, directement dans GitHub, pour annoncer des pull à faire et réaliser les merge (valider par chef de projet)

git commit - m "message" -m "suite avec détails"   ==> permet de faire un titre de commit qui s'affichera dans GitHun et de rajouter des détails techniques plus détaillés.

*/