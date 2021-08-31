<?php

namespace App\Services;

use App\Repository\UrlRepository;
use App\Entity\Url;

class PostUrlManager {

    private $urlRepository;

    function __construct(UrlRepository $urlRepository) {
        $this->urlRepository = $urlRepository;
    }

    public function invoke($parameters) {

        $random = $this->createRandomKey();
        $url = new Url($parameters['origin'], $random);
        $this->urlRepository->save($url);
        return ['origin' => $url->getOrigin(), 'shorter' => $url->getShorter()];
    }

    private function createRandomKey() {

        $lenghtKey = 5;

        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomKey = '';

        for ($i = 0; $i < $lenghtKey; $i++) {
            $randomKey .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomKey;
    }
    

 

}
