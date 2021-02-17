import { IsNotEmpty, IsString, IsInt } from 'class-validator'

import { ApiProperty } from '@nestjs/swagger'

export class TestDto {

    @IsNotEmpty()
    @IsString()
    businesscenter_id: string

    @IsNotEmpty()
    @IsString()
    driver_id: string

    @IsNotEmpty()
    @IsInt()
    estimated_time: number

    @IsNotEmpty()
    @IsInt()
    volume: number
}
