import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class AnonymiserDetect implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Anonymiser Detect',
        name: 'anonymiserDetect',
        icon: 'file:anonymiserdetect.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={$parameter["operation"]}',
        description: 'Perform anonymiser detect operations in n8n',
        defaults: {
            name: 'Anonymiser Detect',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'anonymiserDetectApi',
                required: true,
            },
        ],
        properties: [
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: 'Execute',
                        value: 'execute',
                        description: 'Execute the anonymisation action',
                        action: 'Execute action',
                    },
                ],
                default: 'execute',
            },
        ],
    };
}
