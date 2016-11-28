# Commitizen Mapbox Changelog

This is a [commitizen](http://commitizen.github.io/cz-cli/) plugin to make the writing of commit messages consistent across a repo.

## Usage

```
git add ./some/file/to/add
git cz
```

## Install

If you don't have commitizen yet:

```
npm install -g commitizen
```

Once you have commitizen:

```
npm install cz-mapbox-changelog --save
```

Then add the below json block to your package.json.

```
"czConfig": {
  "path": "node_modules/cz-mapbox-changelog"
}
```

## Parsing Git Log

Changelog ships with a simple parser tool that will read the output of `git log` and output a list of commits grouped by their category. For more info on how to limit `git log` to only output the commits that are new to your next release, use `git log <OLD_VERSION>..<NEW_VERSION>` where `OLD_VERSION` and `NEW_VERSION` are git shas or tags.

`git log | parse-git-log >> changelog.txt`

### ARGS

* --filter-out=cat1,cat2: will exclude the provided categories from its output
* --header-size=2: sets the number of # used for category headers. Default 3.
