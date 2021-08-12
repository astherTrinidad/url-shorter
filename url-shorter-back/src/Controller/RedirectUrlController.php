<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Services\RedirectUrlManager;

class RedirectUrlController extends AbstractController {

    private $redirectUrlManager;

    public function __construct(RedirectUrlManager $redirectUrlManager) {
        $this->redirectUrlManager = $redirectUrlManager;
    }

    /**
     * @Route("/{key}", name="redirect", methods={"GET"})
     */
    public function origin(string $key): Response {
                
        $result = $this->redirectUrlManager->getUrl($key);

        if (!$result) {
            return new JsonResponse(['message' => 'not found'], Response::HTTP_NOT_FOUND);
        } 
       
        return new JsonResponse($result);
    }
}
