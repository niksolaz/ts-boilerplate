{
    "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "moduleResolution": "node",
        "declaration": true,
        "strict": true,
        "noImplicitAny": true /* Raise error on expressions and declarations with an implied 'any' type. */,
        "strictNullChecks": true /* Enable strict null checks. */,
        "strictFunctionTypes": true /* Enable strict checking of function types. */,
        "noUnusedLocals": true /* Report errors on unused locals. */,
        "noUnusedParameters": true /* Report errors on unused parameters. */,
        "noImplicitReturns": true /* Report error when not all code paths in function return a value. */,
        "noFallthroughCasesInSwitch": true /* Report errors for fallthrough cases in switch statement. */,
        "importHelpers": true,
        "skipLibCheck": true,
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        "experimentalDecorators": true,
        "sourceMap": true,
        "outDir": "./dist/tsc/",
        "types": [
        "node",
        "jest"
        ],
        "lib": [
        "ES6",
        "DOM"
        ]
    },
    "include": [
        "src/**/*.ts"
    ],
    "exclude": [
        "node_modules",
        "**/*.test.ts"
    ]
}