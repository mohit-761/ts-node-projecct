import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class User1776593363195 implements MigrationInterface {

    public table = 'user';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: this.table,
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'password',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'current_timestamp'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'current_timestamp',
                    onUpdate: 'current_timestamp'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        let table = await queryRunner.getTable(this.table);
        if(!table) return;
        await queryRunner.dropTable(table);
    }

}
