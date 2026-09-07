import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class AnonymiserDetectApi implements ICredentialType {
    name = 'anonymiserDetectApi';
    displayName = 'Anonymiser Detect API';
    documentationUrl = 'https://github.com/mirdora-dev/anonymiser-core-standalone';
    properties: INodeProperties[] = [
        {
            displayName: 'Environment Path',
            name: 'envPath',
            type: 'string',
            default: '',
            description: 'Optional path to custom environment configurations',
        },
    ];
}
