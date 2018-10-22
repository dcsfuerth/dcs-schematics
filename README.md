# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

### Testing

To test locally, install `@angular-devkit/schematics` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with
```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!

# dcs-schematics

## prerequisites
### install the schematics cli
1. npm install -g @angular-devkit/schematics-cli


### set up dcs schematics
1. git clone git@github.com:dcsfuerth/dcs-schematics.git
2. cd dcs-schematics
3. npm install
4. npm run build
5. Test it with: schematics .:read-reducer --name=helloworld (dry-run is default, so no files should be created)

```javascript
schematics .:read-reducer --name=helloworld
CREATE /src/app/reducers/helloworld/helloworld.actions.ts (278 bytes)
CREATE /src/app/reducers/helloworld/helloworld.manager.ts (974 bytes)
CREATE /src/app/reducers/helloworld/models/helloworld.class.ts (387 bytes)
```

### set up foodstore as test environment
1. git clone git@github.com:dcsfuerth/ngx-food-order-cli.git
2. cd ngx-food-order-cli
3. npm install
4. npm link /Users/entwickler/Documents/Projekte/howtoschematics/dcs-schematics

## adding a new feature
1. open dcs-schematics project
2. schematics blank --name=read-reducer-simple
3. implement functionality
4. npm run build
5. schematics .:read-reducer-simple --name=helloworld
4. open dcs-foodstore project
5. ng g @dcs/schematics:read-reducer-simple --name VisitorsNr

