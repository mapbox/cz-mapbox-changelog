# Commitizen Mapbox Changelog

This is a [commitizen](http://commitizen.github.io/cz-cli/) plugin to make the writting of commit messages consistant across a repo.

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