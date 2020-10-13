import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602610344499 implements MigrationInterface {
    // Imagem  1 <--->>> * Orfanato
    // CASCADE: Quando ocorre algo com o id do orfanato, as tabelas que o possuem
    // como chave estrangeira serão alterados tambem

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: 'images',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'path',
                    type: 'varchar',
                },
                {
                    name: 'orphanage_id',
                    type: 'integer',
                }
            ],
            foreignKeys: [
                {
                    name: 'ImageOrphanage',
                    columnNames: ['orphanage_id'],
                    referencedTableName: 'orphanages',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                }
            ]
        }))
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images')
    }

}
